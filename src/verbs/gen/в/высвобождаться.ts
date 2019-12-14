import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высвобождаться: PerfectVerb = {
  name: Word('высвобождаться', 9),
  singular1stPerson: Word('высвобождаюсь', 9),
  singular2ndPerson: Word('высвобождаешься', 9),
  singular3rdPerson: Word('высвобождается', 9),
  plural1stPerson: Word('высвобождаемся', 9),
  plural2ndPerson: Word('высвобождаетесь', 9),
  plural3rdPerson: Word('высвобождаются', 9),
  masculinePast: Word('высвобождался', 9),
  femininePast: Word('высвобождалась', 9),
  neuterPast: Word('высвобождалось', 9),
  pluralPast: Word('высвобождались', 9),
  imperativeInformal: Word('высвобождайся', 9),
  imperativeFormal: Word('высвобождайтесь', 9),
  imperfect: [],
};

perfectVerbs.set(высвобождаться.name.text, высвобождаться);

export { высвобождаться };