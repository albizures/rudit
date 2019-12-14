import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кутаться: PerfectVerb = {
  name: Word('кутаться', 1),
  singular1stPerson: Word('кутаюсь', 1),
  singular2ndPerson: Word('кутаешься', 1),
  singular3rdPerson: Word('кутается', 1),
  plural1stPerson: Word('кутаемся', 1),
  plural2ndPerson: Word('кутаетесь', 1),
  plural3rdPerson: Word('кутаются', 1),
  masculinePast: Word('кутался', 1),
  femininePast: Word('куталась', 1),
  neuterPast: Word('куталось', 1),
  pluralPast: Word('кутались', 1),
  imperativeInformal: Word('кутайся', 1),
  imperativeFormal: Word('кутайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(кутаться.name.text, кутаться);

export { кутаться };