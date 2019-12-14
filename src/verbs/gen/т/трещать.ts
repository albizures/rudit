import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const трещать: PerfectVerb = {
  name: Word('трещать', 4),
  singular1stPerson: Word('трещу', 4),
  singular2ndPerson: Word('трещишь', 4),
  singular3rdPerson: Word('трещит', 4),
  plural1stPerson: Word('трещим', 4),
  plural2ndPerson: Word('трещите', 4),
  plural3rdPerson: Word('трещат', 4),
  masculinePast: Word('трещал', 4),
  femininePast: Word('трещала', 4),
  neuterPast: Word('трещало', 4),
  pluralPast: Word('трещали', 4),
  imperativeInformal: Word('трещи', 4),
  imperativeFormal: Word('трещите', 4),
  imperfect: [],
};

perfectVerbs.set(трещать.name.text, трещать);

export { трещать };