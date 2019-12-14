import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропитаться: PerfectVerb = {
  name: Word('пропитаться', 6),
  singular1stPerson: Word('пропитаюсь', 6),
  singular2ndPerson: Word('пропитаешься', 6),
  singular3rdPerson: Word('пропитается', 6),
  plural1stPerson: Word('пропитаемся', 6),
  plural2ndPerson: Word('пропитаетесь', 6),
  plural3rdPerson: Word('пропитаются', 6),
  masculinePast: Word('пропитался', 6),
  femininePast: Word('пропиталась', 6),
  neuterPast: Word('пропиталось', 6),
  pluralPast: Word('пропитались', 6),
  imperativeInformal: Word('пропитайся', 6),
  imperativeFormal: Word('пропитайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(пропитаться.name.text, пропитаться);

export { пропитаться };