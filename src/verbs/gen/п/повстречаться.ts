import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повстречаться: PerfectVerb = {
  name: Word('повстречаться', 8),
  singular1stPerson: Word('повстречаюсь', 8),
  singular2ndPerson: Word('повстречаешься', 8),
  singular3rdPerson: Word('повстречается', 8),
  plural1stPerson: Word('повстречаемся', 8),
  plural2ndPerson: Word('повстречаетесь', 8),
  plural3rdPerson: Word('повстречаются', 8),
  masculinePast: Word('повстречался', 8),
  femininePast: Word('повстречалась', 8),
  neuterPast: Word('повстречалось', 8),
  pluralPast: Word('повстречались', 8),
  imperativeInformal: Word('повстречайся', 8),
  imperativeFormal: Word('повстречайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(повстречаться.name.text, повстречаться);

export { повстречаться };