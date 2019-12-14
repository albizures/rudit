import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отодвигаться: PerfectVerb = {
  name: Word('отодвигаться', 7),
  singular1stPerson: Word('отодвигаюсь', 7),
  singular2ndPerson: Word('отодвигаешься', 7),
  singular3rdPerson: Word('отодвигается', 7),
  plural1stPerson: Word('отодвигаемся', 7),
  plural2ndPerson: Word('отодвигаетесь', 7),
  plural3rdPerson: Word('отодвигаются', 7),
  masculinePast: Word('отодвигался', 7),
  femininePast: Word('отодвигалась', 7),
  neuterPast: Word('отодвигалось', 7),
  pluralPast: Word('отодвигались', 7),
  imperativeInformal: Word('отодвигайся', 7),
  imperativeFormal: Word('отодвигайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(отодвигаться.name.text, отодвигаться);

export { отодвигаться };