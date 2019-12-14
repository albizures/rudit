import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const баламутить: PerfectVerb = {
  name: Word('баламутить', 5),
  singular1stPerson: Word('баламучу', 5),
  singular2ndPerson: Word('баламутишь', 5),
  singular3rdPerson: Word('баламутит', 5),
  plural1stPerson: Word('баламутим', 5),
  plural2ndPerson: Word('баламутите', 5),
  plural3rdPerson: Word('баламутят', 5),
  masculinePast: Word('баламутил', 5),
  femininePast: Word('баламутила', 5),
  neuterPast: Word('баламутило', 5),
  pluralPast: Word('баламутили', 5),
  imperativeInformal: Word('баламуть', 5),
  imperativeFormal: Word('баламутьте', 5),
  imperfect: [],
};

perfectVerbs.set(баламутить.name.text, баламутить);

export { баламутить };