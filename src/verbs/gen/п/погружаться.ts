import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погружаться: PerfectVerb = {
  name: Word('погружаться', 6),
  singular1stPerson: Word('погружаюсь', 6),
  singular2ndPerson: Word('погружаешься', 6),
  singular3rdPerson: Word('погружается', 6),
  plural1stPerson: Word('погружаемся', 6),
  plural2ndPerson: Word('погружаетесь', 6),
  plural3rdPerson: Word('погружаются', 6),
  masculinePast: Word('погружался', 6),
  femininePast: Word('погружалась', 6),
  neuterPast: Word('погружалось', 6),
  pluralPast: Word('погружались', 6),
  imperativeInformal: Word('погружайся', 6),
  imperativeFormal: Word('погружайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(погружаться.name.text, погружаться);

export { погружаться };