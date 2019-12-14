import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const послушаться: PerfectVerb = {
  name: Word('послушаться', 4),
  singular1stPerson: Word('послушаюсь', 4),
  singular2ndPerson: Word('послушаешься', 4),
  singular3rdPerson: Word('послушается', 4),
  plural1stPerson: Word('послушаемся', 4),
  plural2ndPerson: Word('послушаетесь', 4),
  plural3rdPerson: Word('послушаются', 4),
  masculinePast: Word('послушался', 4),
  femininePast: Word('послушалась', 4),
  neuterPast: Word('послушалось', 4),
  pluralPast: Word('послушались', 4),
  imperativeInformal: Word('послушайся', 4),
  imperativeFormal: Word('послушайтесь', 4),
  imperfect: ['слушаться'],
};

perfectVerbs.set(послушаться.name.text, послушаться);

export { послушаться };