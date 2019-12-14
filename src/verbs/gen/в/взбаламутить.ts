import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взбаламутить: PerfectVerb = {
  name: Word('взбаламутить', 7),
  singular1stPerson: Word('взбаламучу', 7),
  singular2ndPerson: Word('взбаламутишь', 7),
  singular3rdPerson: Word('взбаламутит', 7),
  plural1stPerson: Word('взбаламутим', 7),
  plural2ndPerson: Word('взбаламутите', 7),
  plural3rdPerson: Word('взбаламутят', 7),
  masculinePast: Word('взбаламутил', 7),
  femininePast: Word('взбаламутила', 7),
  neuterPast: Word('взбаламутило', 7),
  pluralPast: Word('взбаламутили', 7),
  imperativeInformal: Word('взбаламуть', 7),
  imperativeFormal: Word('взбаламутьте', 7),
  imperfect: [],
};

perfectVerbs.set(взбаламутить.name.text, взбаламутить);

export { взбаламутить };