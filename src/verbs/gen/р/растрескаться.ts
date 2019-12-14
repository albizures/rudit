import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растрескаться: PerfectVerb = {
  name: Word('растрескаться', 5),
  singular1stPerson: Word('растрескаюсь', 5),
  singular2ndPerson: Word('растрескаешься', 5),
  singular3rdPerson: Word('растрескается', 5),
  plural1stPerson: Word('растрескаемся', 5),
  plural2ndPerson: Word('растрескаетесь', 5),
  plural3rdPerson: Word('растрескаются', 5),
  masculinePast: Word('растрескался', 5),
  femininePast: Word('растрескалась', 5),
  neuterPast: Word('растрескалось', 5),
  pluralPast: Word('растрескались', 5),
  imperativeInformal: Word('растрескайся', 5),
  imperativeFormal: Word('растрескайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(растрескаться.name.text, растрескаться);

export { растрескаться };