import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умножаться: PerfectVerb = {
  name: Word('умножаться', 5),
  singular1stPerson: Word('умножаюсь', 5),
  singular2ndPerson: Word('умножаешься', 5),
  singular3rdPerson: Word('умножается', 5),
  plural1stPerson: Word('умножаемся', 5),
  plural2ndPerson: Word('умножаетесь', 5),
  plural3rdPerson: Word('умножаются', 5),
  masculinePast: Word('умножался', 5),
  femininePast: Word('умножалась', 5),
  neuterPast: Word('умножалось', 5),
  pluralPast: Word('умножались', 5),
  imperativeInformal: Word('умножайся', 5),
  imperativeFormal: Word('умножайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(умножаться.name.text, умножаться);

export { умножаться };