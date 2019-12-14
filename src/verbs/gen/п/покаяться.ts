import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покаяться: PerfectVerb = {
  name: Word('покаяться', 3),
  singular1stPerson: Word('покаюсь', 3),
  singular2ndPerson: Word('покаешься', 3),
  singular3rdPerson: Word('покается', 3),
  plural1stPerson: Word('покаемся', 3),
  plural2ndPerson: Word('покаетесь', 3),
  plural3rdPerson: Word('покаются', 3),
  masculinePast: Word('покаялся', 3),
  femininePast: Word('покаялась', 3),
  neuterPast: Word('покаялось', 3),
  pluralPast: Word('покаялись', 3),
  imperativeInformal: Word('покайся', 3),
  imperativeFormal: Word('покайтесь', 3),
  imperfect: ['каяться'],
};

perfectVerbs.set(покаяться.name.text, покаяться);

export { покаяться };