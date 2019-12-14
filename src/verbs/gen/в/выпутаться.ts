import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпутаться: PerfectVerb = {
  name: Word('выпутаться', 1),
  singular1stPerson: Word('выпутаюсь', 1),
  singular2ndPerson: Word('выпутаешься', 1),
  singular3rdPerson: Word('выпутается', 1),
  plural1stPerson: Word('выпутаемся', 1),
  plural2ndPerson: Word('выпутаетесь', 1),
  plural3rdPerson: Word('выпутаются', 1),
  masculinePast: Word('выпутался', 1),
  femininePast: Word('выпуталась', 1),
  neuterPast: Word('выпуталось', 1),
  pluralPast: Word('выпутались', 1),
  imperativeInformal: Word('выпутайся', 1),
  imperativeFormal: Word('выпутайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(выпутаться.name.text, выпутаться);

export { выпутаться };