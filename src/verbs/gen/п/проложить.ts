import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проложить: PerfectVerb = {
  name: Word('проложить', 6),
  singular1stPerson: Word('проложу', 6),
  singular2ndPerson: Word('проложишь', 4),
  singular3rdPerson: Word('проложит', 4),
  plural1stPerson: Word('проложим', 4),
  plural2ndPerson: Word('проложите', 4),
  plural3rdPerson: Word('проложат', 4),
  masculinePast: Word('проложил', 6),
  femininePast: Word('проложила', 6),
  neuterPast: Word('проложило', 6),
  pluralPast: Word('проложили', 6),
  imperativeInformal: Word('проложи', 6),
  imperativeFormal: Word('проложите', 6),
  imperfect: [],
};

perfectVerbs.set(проложить.name.text, проложить);

export { проложить };