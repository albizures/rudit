import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покорёжить: PerfectVerb = {
  name: Word('покорёжить', 7),
  singular1stPerson: Word('покорёжу', 1),
  singular2ndPerson: Word('покорёжишь', 7),
  singular3rdPerson: Word('покорёжит', 7),
  plural1stPerson: Word('покорёжим', 7),
  plural2ndPerson: Word('покорёжите', 9),
  plural3rdPerson: Word('покорёжат', 7),
  masculinePast: Word('покорёжил', 7),
  femininePast: Word('покорёжила', 9),
  neuterPast: Word('покорёжило', 7),
  pluralPast: Word('покорёжили', 7),
  imperativeInformal: Word('покорёжь', 1),
  imperativeFormal: Word('покорёжьте', 9),
  imperfect: [],
};

perfectVerbs.set(покорёжить.name.text, покорёжить);

export { покорёжить };