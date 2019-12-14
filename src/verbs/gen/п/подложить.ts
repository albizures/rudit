import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подложить: PerfectVerb = {
  name: Word('подложить', 6),
  singular1stPerson: Word('подложу', 6),
  singular2ndPerson: Word('подложишь', 4),
  singular3rdPerson: Word('подложит', 4),
  plural1stPerson: Word('подложим', 4),
  plural2ndPerson: Word('подложите', 4),
  plural3rdPerson: Word('подложат', 4),
  masculinePast: Word('подложил', 6),
  femininePast: Word('подложила', 6),
  neuterPast: Word('подложило', 6),
  pluralPast: Word('подложили', 6),
  imperativeInformal: Word('подложи', 6),
  imperativeFormal: Word('подложите', 6),
  imperfect: [],
};

perfectVerbs.set(подложить.name.text, подложить);

export { подложить };