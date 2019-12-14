import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отличаться: PerfectVerb = {
  name: Word('отличаться', 5),
  singular1stPerson: Word('отличаюсь', 5),
  singular2ndPerson: Word('отличаешься', 5),
  singular3rdPerson: Word('отличается', 5),
  plural1stPerson: Word('отличаемся', 5),
  plural2ndPerson: Word('отличаетесь', 5),
  plural3rdPerson: Word('отличаются', 5),
  masculinePast: Word('отличался', 5),
  femininePast: Word('отличалась', 5),
  neuterPast: Word('отличалось', 5),
  pluralPast: Word('отличались', 5),
  imperativeInformal: Word('отличайся', 5),
  imperativeFormal: Word('отличайтесь', 5),
  imperfect: ['отличиться'],
};

perfectVerbs.set(отличаться.name.text, отличаться);

export { отличаться };