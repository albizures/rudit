import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наблюдаться: PerfectVerb = {
  name: Word('наблюдаться', 6),
  singular1stPerson: Word('наблюдаюсь', 6),
  singular2ndPerson: Word('наблюдаешься', 6),
  singular3rdPerson: Word('наблюдается', 6),
  plural1stPerson: Word('наблюдаемся', 6),
  plural2ndPerson: Word('наблюдаетесь', 6),
  plural3rdPerson: Word('наблюдаются', 6),
  masculinePast: Word('наблюдался', 6),
  femininePast: Word('наблюдалась', 6),
  neuterPast: Word('наблюдалось', 6),
  pluralPast: Word('наблюдались', 6),
  imperativeInformal: Word('наблюдайся', 6),
  imperativeFormal: Word('наблюдайтесь', 6),
  imperfect: ['понаблюдаться'],
};

perfectVerbs.set(наблюдаться.name.text, наблюдаться);

export { наблюдаться };