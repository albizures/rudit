import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарисоваться: PerfectVerb = {
  name: Word('зарисоваться', 7),
  singular1stPerson: Word('зарисуюсь', 5),
  singular2ndPerson: Word('зарисуешься', 5),
  singular3rdPerson: Word('зарисуется', 5),
  plural1stPerson: Word('зарисуемся', 5),
  plural2ndPerson: Word('зарисуетесь', 5),
  plural3rdPerson: Word('зарисуются', 5),
  masculinePast: Word('зарисовался', 7),
  femininePast: Word('зарисовалась', 7),
  neuterPast: Word('зарисовалось', 7),
  pluralPast: Word('зарисовались', 7),
  imperativeInformal: Word('зарисуйся', 5),
  imperativeFormal: Word('зарисуйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(зарисоваться.name.text, зарисоваться);

export { зарисоваться };