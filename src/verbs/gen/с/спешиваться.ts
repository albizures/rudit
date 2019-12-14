import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спешиваться: PerfectVerb = {
  name: Word('спешиваться', 2),
  singular1stPerson: Word('спешиваюсь', 2),
  singular2ndPerson: Word('спешиваешься', 2),
  singular3rdPerson: Word('спешивается', 2),
  plural1stPerson: Word('спешиваемся', 2),
  plural2ndPerson: Word('спешиваетесь', 2),
  plural3rdPerson: Word('спешиваются', 2),
  masculinePast: Word('спешивался', 2),
  femininePast: Word('спешивалась', 2),
  neuterPast: Word('спешивалось', 2),
  pluralPast: Word('спешивались', 2),
  imperativeInformal: Word('спешивайся', 2),
  imperativeFormal: Word('спешивайтесь', 2),
  imperfect: ['спешиться'],
};

perfectVerbs.set(спешиваться.name.text, спешиваться);

export { спешиваться };