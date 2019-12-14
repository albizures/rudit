import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повергаться: PerfectVerb = {
  name: Word('повергаться', 6),
  singular1stPerson: Word('повергаюсь', 6),
  singular2ndPerson: Word('повергаешься', 6),
  singular3rdPerson: Word('повергается', 6),
  plural1stPerson: Word('повергаемся', 6),
  plural2ndPerson: Word('повергаетесь', 6),
  plural3rdPerson: Word('повергаются', 6),
  masculinePast: Word('повергался', 6),
  femininePast: Word('повергалась', 6),
  neuterPast: Word('повергалось', 6),
  pluralPast: Word('повергались', 6),
  imperativeInformal: Word('повергайся', 6),
  imperativeFormal: Word('повергайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(повергаться.name.text, повергаться);

export { повергаться };