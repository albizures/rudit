import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упрочиваться: PerfectVerb = {
  name: Word('упрочиваться', 3),
  singular1stPerson: Word('упрочиваюсь', 3),
  singular2ndPerson: Word('упрочиваешься', 3),
  singular3rdPerson: Word('упрочивается', 3),
  plural1stPerson: Word('упрочиваемся', 3),
  plural2ndPerson: Word('упрочиваетесь', 3),
  plural3rdPerson: Word('упрочиваются', 3),
  masculinePast: Word('упрочивался', 3),
  femininePast: Word('упрочивалась', 3),
  neuterPast: Word('упрочивалось', 3),
  pluralPast: Word('упрочивались', 3),
  imperativeInformal: Word('упрочивайся', 3),
  imperativeFormal: Word('упрочивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(упрочиваться.name.text, упрочиваться);

export { упрочиваться };