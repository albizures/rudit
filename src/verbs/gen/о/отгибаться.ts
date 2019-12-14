import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отгибаться: PerfectVerb = {
  name: Word('отгибаться', 5),
  singular1stPerson: Word('отгибаюсь', 5),
  singular2ndPerson: Word('отгибаешься', 5),
  singular3rdPerson: Word('отгибается', 5),
  plural1stPerson: Word('отгибаемся', 5),
  plural2ndPerson: Word('отгибаетесь', 5),
  plural3rdPerson: Word('отгибаются', 5),
  masculinePast: Word('отгибался', 5),
  femininePast: Word('отгибалась', 5),
  neuterPast: Word('отгибалось', 5),
  pluralPast: Word('отгибались', 5),
  imperativeInformal: Word('отгибайся', 5),
  imperativeFormal: Word('отгибайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отгибаться.name.text, отгибаться);

export { отгибаться };