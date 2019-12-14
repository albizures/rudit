import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нахлебаться: PerfectVerb = {
  name: Word('нахлебаться', 6),
  singular1stPerson: Word('нахлебаюсь', 6),
  singular2ndPerson: Word('нахлебаешься', 6),
  singular3rdPerson: Word('нахлебается', 6),
  plural1stPerson: Word('нахлебаемся', 6),
  plural2ndPerson: Word('нахлебаетесь', 6),
  plural3rdPerson: Word('нахлебаются', 6),
  masculinePast: Word('нахлебался', 6),
  femininePast: Word('нахлебалась', 6),
  neuterPast: Word('нахлебалось', 6),
  pluralPast: Word('нахлебались', 6),
  imperativeInformal: Word('нахлебайся', 6),
  imperativeFormal: Word('нахлебайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(нахлебаться.name.text, нахлебаться);

export { нахлебаться };