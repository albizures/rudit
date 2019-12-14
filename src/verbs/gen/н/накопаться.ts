import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накопаться: PerfectVerb = {
  name: Word('накопаться', 5),
  singular1stPerson: Word('накопаюсь', 5),
  singular2ndPerson: Word('накопаешься', 5),
  singular3rdPerson: Word('накопается', 5),
  plural1stPerson: Word('накопаемся', 5),
  plural2ndPerson: Word('накопаетесь', 5),
  plural3rdPerson: Word('накопаются', 5),
  masculinePast: Word('накопался', 5),
  femininePast: Word('накопалась', 5),
  neuterPast: Word('накопалось', 5),
  pluralPast: Word('накопались', 5),
  imperativeInformal: Word('накопайся', 5),
  imperativeFormal: Word('накопайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(накопаться.name.text, накопаться);

export { накопаться };