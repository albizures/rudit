import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наглотаться: PerfectVerb = {
  name: Word('наглотаться', 6),
  singular1stPerson: Word('наглотаюсь', 6),
  singular2ndPerson: Word('наглотаешься', 6),
  singular3rdPerson: Word('наглотается', 6),
  plural1stPerson: Word('наглотаемся', 6),
  plural2ndPerson: Word('наглотаетесь', 6),
  plural3rdPerson: Word('наглотаются', 6),
  masculinePast: Word('наглотался', 6),
  femininePast: Word('наглоталась', 6),
  neuterPast: Word('наглоталось', 6),
  pluralPast: Word('наглотались', 6),
  imperativeInformal: Word('наглотайся', 6),
  imperativeFormal: Word('наглотайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(наглотаться.name.text, наглотаться);

export { наглотаться };