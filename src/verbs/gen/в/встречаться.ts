import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const встречаться: PerfectVerb = {
  name: Word('встречаться', 6),
  singular1stPerson: Word('встречаюсь', 6),
  singular2ndPerson: Word('встречаешься', 6),
  singular3rdPerson: Word('встречается', 6),
  plural1stPerson: Word('встречаемся', 6),
  plural2ndPerson: Word('встречаетесь', 6),
  plural3rdPerson: Word('встречаются', 6),
  masculinePast: Word('встречался', 6),
  femininePast: Word('встречалась', 6),
  neuterPast: Word('встречалось', 6),
  pluralPast: Word('встречались', 6),
  imperativeInformal: Word('встречайся', 6),
  imperativeFormal: Word('встречайтесь', 6),
  imperfect: ['встретиться'],
};

perfectVerbs.set(встречаться.name.text, встречаться);

export { встречаться };