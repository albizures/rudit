import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передразнить: PerfectVerb = {
  name: Word('передразнить', 9),
  singular1stPerson: Word('передразню', 9),
  singular2ndPerson: Word('передразнишь', 6),
  singular3rdPerson: Word('передразнит', 6),
  plural1stPerson: Word('передразним', 6),
  plural2ndPerson: Word('передразните', 6),
  plural3rdPerson: Word('передразнят', 6),
  masculinePast: Word('передразнил', 9),
  femininePast: Word('передразнила', 9),
  neuterPast: Word('передразнило', 9),
  pluralPast: Word('передразнили', 9),
  imperativeInformal: Word('передразни', 9),
  imperativeFormal: Word('передразните', 9),
  imperfect: [],
};

perfectVerbs.set(передразнить.name.text, передразнить);

export { передразнить };