import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const реорганизовать: PerfectVerb = {
  name: Word('реорганизовать', 11),
  singular1stPerson: Word('реорганизую', 9),
  singular2ndPerson: Word('реорганизуешь', 9),
  singular3rdPerson: Word('реорганизует', 9),
  plural1stPerson: Word('реорганизуем', 9),
  plural2ndPerson: Word('реорганизуете', 9),
  plural3rdPerson: Word('реорганизуют', 9),
  masculinePast: Word('реорганизовал', 11),
  femininePast: Word('реорганизовала', 11),
  neuterPast: Word('реорганизовало', 11),
  pluralPast: Word('реорганизовали', 11),
  imperativeInformal: Word('реорганизуй', 9),
  imperativeFormal: Word('реорганизуйте', 9),
  imperfect: [],
};

perfectVerbs.set(реорганизовать.name.text, реорганизовать);

export { реорганизовать };