import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спроворить: PerfectVerb = {
  name: Word('спроворить', 5),
  singular1stPerson: Word('спроворю', 5),
  singular2ndPerson: Word('спроворишь', 5),
  singular3rdPerson: Word('спроворит', 5),
  plural1stPerson: Word('спроворим', 5),
  plural2ndPerson: Word('спроворите', 5),
  plural3rdPerson: Word('спроворят', 5),
  masculinePast: Word('спроворил', 5),
  femininePast: Word('спроворила', 5),
  neuterPast: Word('спроворило', 5),
  pluralPast: Word('спроворили', 5),
  imperativeInformal: Word('спроворь', 5),
  imperativeFormal: Word('спроворьте', 5),
  imperfect: [],
};

perfectVerbs.set(спроворить.name.text, спроворить);

export { спроворить };