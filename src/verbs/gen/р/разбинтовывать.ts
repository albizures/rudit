import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбинтовывать: PerfectVerb = {
  name: Word('разбинтовывать', 7),
  singular1stPerson: Word('разбинтовываю', 7),
  singular2ndPerson: Word('разбинтовываешь', 7),
  singular3rdPerson: Word('разбинтовывает', 7),
  plural1stPerson: Word('разбинтовываем', 7),
  plural2ndPerson: Word('разбинтовываете', 7),
  plural3rdPerson: Word('разбинтовывают', 7),
  masculinePast: Word('разбинтовывал', 7),
  femininePast: Word('разбинтовывала', 7),
  neuterPast: Word('разбинтовывало', 7),
  pluralPast: Word('разбинтовывали', 7),
  imperativeInformal: Word('разбинтовывай', 7),
  imperativeFormal: Word('разбинтовывайте', 7),
  imperfect: [],
};

perfectVerbs.set(разбинтовывать.name.text, разбинтовывать);

export { разбинтовывать };