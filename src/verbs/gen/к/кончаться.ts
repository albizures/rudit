import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кончаться: PerfectVerb = {
  name: Word('кончаться', 4),
  singular1stPerson: Word('кончаюсь', 4),
  singular2ndPerson: Word('кончаешься', 4),
  singular3rdPerson: Word('кончается', 4),
  plural1stPerson: Word('кончаемся', 4),
  plural2ndPerson: Word('кончаетесь', 4),
  plural3rdPerson: Word('кончаются', 4),
  masculinePast: Word('кончался', 4),
  femininePast: Word('кончалась', 4),
  neuterPast: Word('кончалось', 4),
  pluralPast: Word('кончались', 4),
  imperativeInformal: Word('кончайся', 4),
  imperativeFormal: Word('кончайтесь', 4),
  imperfect: ['кончиться'],
};

perfectVerbs.set(кончаться.name.text, кончаться);

export { кончаться };