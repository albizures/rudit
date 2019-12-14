import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const добиваться: PerfectVerb = {
  name: Word('добиваться', 5),
  singular1stPerson: Word('добиваюсь', 5),
  singular2ndPerson: Word('добиваешься', 5),
  singular3rdPerson: Word('добивается', 5),
  plural1stPerson: Word('добиваемся', 5),
  plural2ndPerson: Word('добиваетесь', 5),
  plural3rdPerson: Word('добиваются', 5),
  masculinePast: Word('добивался', 5),
  femininePast: Word('добивалась', 5),
  neuterPast: Word('добивалось', 5),
  pluralPast: Word('добивались', 5),
  imperativeInformal: Word('добивайся', 5),
  imperativeFormal: Word('добивайтесь', 5),
  imperfect: ['добиться'],
};

perfectVerbs.set(добиваться.name.text, добиваться);

export { добиваться };