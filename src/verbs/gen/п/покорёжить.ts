import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покорёжить: PerfectVerb = {
  name: Word('покорёжить', 5),
  singular1stPerson: Word('покорёжу', 5),
  singular2ndPerson: Word('покорёжишь', 5),
  singular3rdPerson: Word('покорёжит', 5),
  plural1stPerson: Word('покорёжим', 5),
  plural2ndPerson: Word('покорёжите', 5),
  plural3rdPerson: Word('покорёжат', 5),
  masculinePast: Word('покорёжил', 5),
  femininePast: Word('покорёжила', 5),
  neuterPast: Word('покорёжило', 5),
  pluralPast: Word('покорёжили', 5),
  imperativeInformal: Word('покорёжь', 5),
  imperativeFormal: Word('покорёжьте', 5),
  imperfect: [],
};

perfectVerbs.set(покорёжить.name.text, покорёжить);

export { покорёжить };