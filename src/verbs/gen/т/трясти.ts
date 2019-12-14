import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const трясти: PerfectVerb = {
  name: Word('трясти', 5),
  singular1stPerson: Word('трясу', 4),
  singular2ndPerson: Word('трясёшь', 4),
  singular3rdPerson: Word('трясёт', 4),
  plural1stPerson: Word('трясём', 4),
  plural2ndPerson: Word('трясёте', 4),
  plural3rdPerson: Word('трясут', 4),
  masculinePast: Word('тряс', 2),
  femininePast: Word('трясла', 5),
  neuterPast: Word('трясло', 5),
  pluralPast: Word('трясли', 5),
  imperativeInformal: Word('тряси', 4),
  imperativeFormal: Word('трясите', 4),
  imperfect: ['потрясти','тряхнуть'],
};

perfectVerbs.set(трясти.name.text, трясти);

export { трясти };