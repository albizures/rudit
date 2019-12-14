import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const объедаться: PerfectVerb = {
  name: Word('объедаться', 5),
  singular1stPerson: Word('объедаюсь', 5),
  singular2ndPerson: Word('объедаешься', 5),
  singular3rdPerson: Word('объедается', 5),
  plural1stPerson: Word('объедаемся', 5),
  plural2ndPerson: Word('объедаетесь', 5),
  plural3rdPerson: Word('объедаются', 5),
  masculinePast: Word('объедался', 5),
  femininePast: Word('объедалась', 5),
  neuterPast: Word('объедалось', 5),
  pluralPast: Word('объедались', 5),
  imperativeInformal: Word('объедайся', 5),
  imperativeFormal: Word('объедайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(объедаться.name.text, объедаться);

export { объедаться };