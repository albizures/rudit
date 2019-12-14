import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сжигаться: PerfectVerb = {
  name: Word('сжигаться', 4),
  singular1stPerson: Word('сжигаюсь', 4),
  singular2ndPerson: Word('сжигаешься', 4),
  singular3rdPerson: Word('сжигается', 4),
  plural1stPerson: Word('сжигаемся', 4),
  plural2ndPerson: Word('сжигаетесь', 4),
  plural3rdPerson: Word('сжигаются', 4),
  masculinePast: Word('сжигался', 4),
  femininePast: Word('сжигалась', 4),
  neuterPast: Word('сжигалось', 4),
  pluralPast: Word('сжигались', 4),
  imperativeInformal: Word('сжигайся', 4),
  imperativeFormal: Word('сжигайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(сжигаться.name.text, сжигаться);

export { сжигаться };