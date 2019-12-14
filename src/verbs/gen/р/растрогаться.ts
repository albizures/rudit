import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растрогаться: PerfectVerb = {
  name: Word('растрогаться', 5),
  singular1stPerson: Word('растрогаюсь', 5),
  singular2ndPerson: Word('растрогаешься', 5),
  singular3rdPerson: Word('растрогается', 5),
  plural1stPerson: Word('растрогаемся', 5),
  plural2ndPerson: Word('растрогаетесь', 5),
  plural3rdPerson: Word('растрогаются', 5),
  masculinePast: Word('растрогался', 5),
  femininePast: Word('растрогалась', 5),
  neuterPast: Word('растрогалось', 5),
  pluralPast: Word('растрогались', 5),
  imperativeInformal: Word('растрогайся', 5),
  imperativeFormal: Word('растрогайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(растрогаться.name.text, растрогаться);

export { растрогаться };