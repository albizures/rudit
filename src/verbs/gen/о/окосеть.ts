import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окосеть: PerfectVerb = {
  name: Word('окосеть', 4),
  singular1stPerson: Word('окосею', 4),
  singular2ndPerson: Word('окосеешь', 4),
  singular3rdPerson: Word('окосеет', 4),
  plural1stPerson: Word('окосеем', 4),
  plural2ndPerson: Word('окосеете', 4),
  plural3rdPerson: Word('окосеют', 4),
  masculinePast: Word('окосел', 4),
  femininePast: Word('окосела', 4),
  neuterPast: Word('окосело', 4),
  pluralPast: Word('окосели', 4),
  imperativeInformal: Word('окосей', 4),
  imperativeFormal: Word('окосейте', 4),
  imperfect: [],
};

perfectVerbs.set(окосеть.name.text, окосеть);

export { окосеть };