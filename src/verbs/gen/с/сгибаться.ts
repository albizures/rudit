import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сгибаться: PerfectVerb = {
  name: Word('сгибаться', 4),
  singular1stPerson: Word('сгибаюсь', 4),
  singular2ndPerson: Word('сгибаешься', 4),
  singular3rdPerson: Word('сгибается', 4),
  plural1stPerson: Word('сгибаемся', 4),
  plural2ndPerson: Word('сгибаетесь', 4),
  plural3rdPerson: Word('сгибаются', 4),
  masculinePast: Word('сгибался', 4),
  femininePast: Word('сгибалась', 4),
  neuterPast: Word('сгибалось', 4),
  pluralPast: Word('сгибались', 4),
  imperativeInformal: Word('сгибайся', 4),
  imperativeFormal: Word('сгибайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(сгибаться.name.text, сгибаться);

export { сгибаться };