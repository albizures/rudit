import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приспосабливаться: PerfectVerb = {
  name: Word('приспосабливаться', 7),
  singular1stPerson: Word('приспосабливаюсь', 7),
  singular2ndPerson: Word('приспосабливаешься', 7),
  singular3rdPerson: Word('приспосабливается', 7),
  plural1stPerson: Word('приспосабливаемся', 7),
  plural2ndPerson: Word('приспосабливаетесь', 7),
  plural3rdPerson: Word('приспосабливаются', 7),
  masculinePast: Word('приспосабливался', 7),
  femininePast: Word('приспосабливалась', 7),
  neuterPast: Word('приспосабливалось', 7),
  pluralPast: Word('приспосабливались', 7),
  imperativeInformal: Word('приспосабливайся', 7),
  imperativeFormal: Word('приспосабливайтесь', 7),
  imperfect: ['приспособиться'],
};

perfectVerbs.set(приспосабливаться.name.text, приспосабливаться);

export { приспосабливаться };