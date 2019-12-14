import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закачаться: PerfectVerb = {
  name: Word('закачаться', 5),
  singular1stPerson: Word('закачаюсь', 5),
  singular2ndPerson: Word('закачаешься', 5),
  singular3rdPerson: Word('закачается', 5),
  plural1stPerson: Word('закачаемся', 5),
  plural2ndPerson: Word('закачаетесь', 5),
  plural3rdPerson: Word('закачаются', 5),
  masculinePast: Word('закачался', 5),
  femininePast: Word('закачалась', 5),
  neuterPast: Word('закачалось', 5),
  pluralPast: Word('закачались', 5),
  imperativeInformal: Word('закачайся', 5),
  imperativeFormal: Word('закачайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(закачаться.name.text, закачаться);

export { закачаться };