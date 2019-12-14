import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвечать: PerfectVerb = {
  name: Word('отвечать', 5),
  singular1stPerson: Word('отвечаю', 5),
  singular2ndPerson: Word('отвечаешь', 5),
  singular3rdPerson: Word('отвечает', 5),
  plural1stPerson: Word('отвечаем', 5),
  plural2ndPerson: Word('отвечаете', 5),
  plural3rdPerson: Word('отвечают', 5),
  masculinePast: Word('отвечал', 5),
  femininePast: Word('отвечала', 5),
  neuterPast: Word('отвечало', 5),
  pluralPast: Word('отвечали', 5),
  imperativeInformal: Word('отвечай', 5),
  imperativeFormal: Word('отвечайте', 5),
  imperfect: ['ответить'],
};

perfectVerbs.set(отвечать.name.text, отвечать);

export { отвечать };