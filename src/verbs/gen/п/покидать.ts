import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покидать: PerfectVerb = {
  name: Word('покидать', 5),
  singular1stPerson: Word('покидаю', 5),
  singular2ndPerson: Word('покидаешь', 5),
  singular3rdPerson: Word('покидает', 5),
  plural1stPerson: Word('покидаем', 5),
  plural2ndPerson: Word('покидаете', 5),
  plural3rdPerson: Word('покидают', 5),
  masculinePast: Word('покидал', 5),
  femininePast: Word('покидала', 5),
  neuterPast: Word('покидало', 5),
  pluralPast: Word('покидали', 5),
  imperativeInformal: Word('покидай', 5),
  imperativeFormal: Word('покидайте', 5),
  imperfect: ['покинуть'],
};

perfectVerbs.set(покидать.name.text, покидать);

export { покидать };