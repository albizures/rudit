import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закутаться: PerfectVerb = {
  name: Word('закутаться', 3),
  singular1stPerson: Word('закутаюсь', 3),
  singular2ndPerson: Word('закутаешься', 3),
  singular3rdPerson: Word('закутается', 3),
  plural1stPerson: Word('закутаемся', 3),
  plural2ndPerson: Word('закутаетесь', 3),
  plural3rdPerson: Word('закутаются', 3),
  masculinePast: Word('закутался', 3),
  femininePast: Word('закуталась', 3),
  neuterPast: Word('закуталось', 3),
  pluralPast: Word('закутались', 3),
  imperativeInformal: Word('закутайся', 3),
  imperativeFormal: Word('закутайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(закутаться.name.text, закутаться);

export { закутаться };