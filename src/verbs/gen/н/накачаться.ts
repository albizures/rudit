import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накачаться: PerfectVerb = {
  name: Word('накачаться', 5),
  singular1stPerson: Word('накачаюсь', 5),
  singular2ndPerson: Word('накачаешься', 5),
  singular3rdPerson: Word('накачается', 5),
  plural1stPerson: Word('накачаемся', 5),
  plural2ndPerson: Word('накачаетесь', 5),
  plural3rdPerson: Word('накачаются', 5),
  masculinePast: Word('накачался', 5),
  femininePast: Word('накачалась', 5),
  neuterPast: Word('накачалось', 5),
  pluralPast: Word('накачались', 5),
  imperativeInformal: Word('накачайся', 5),
  imperativeFormal: Word('накачайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(накачаться.name.text, накачаться);

export { накачаться };