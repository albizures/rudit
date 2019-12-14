import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const успокаиваться: PerfectVerb = {
  name: Word('успокаиваться', 5),
  singular1stPerson: Word('успокаиваюсь', 5),
  singular2ndPerson: Word('успокаиваешься', 5),
  singular3rdPerson: Word('успокаивается', 5),
  plural1stPerson: Word('успокаиваемся', 5),
  plural2ndPerson: Word('успокаиваетесь', 5),
  plural3rdPerson: Word('успокаиваются', 5),
  masculinePast: Word('успокаивался', 5),
  femininePast: Word('успокаивалась', 5),
  neuterPast: Word('успокаивалось', 5),
  pluralPast: Word('успокаивались', 5),
  imperativeInformal: Word('успокаивайся', 5),
  imperativeFormal: Word('успокаивайтесь', 5),
  imperfect: ['успокоиться'],
};

perfectVerbs.set(успокаиваться.name.text, успокаиваться);

export { успокаиваться };