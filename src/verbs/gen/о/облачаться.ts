import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облачаться: PerfectVerb = {
  name: Word('облачаться', 5),
  singular1stPerson: Word('облачаюсь', 5),
  singular2ndPerson: Word('облачаешься', 5),
  singular3rdPerson: Word('облачается', 5),
  plural1stPerson: Word('облачаемся', 5),
  plural2ndPerson: Word('облачаетесь', 5),
  plural3rdPerson: Word('облачаются', 5),
  masculinePast: Word('облачался', 5),
  femininePast: Word('облачалась', 5),
  neuterPast: Word('облачалось', 5),
  pluralPast: Word('облачались', 5),
  imperativeInformal: Word('облачайся', 5),
  imperativeFormal: Word('облачайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(облачаться.name.text, облачаться);

export { облачаться };