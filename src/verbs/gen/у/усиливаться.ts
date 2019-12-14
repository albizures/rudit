import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усиливаться: PerfectVerb = {
  name: Word('усиливаться', 2),
  singular1stPerson: Word('усиливаюсь', 2),
  singular2ndPerson: Word('усиливаешься', 2),
  singular3rdPerson: Word('усиливается', 2),
  plural1stPerson: Word('усиливаемся', 2),
  plural2ndPerson: Word('усиливаетесь', 2),
  plural3rdPerson: Word('усиливаются', 2),
  masculinePast: Word('усиливался', 2),
  femininePast: Word('усиливалась', 2),
  neuterPast: Word('усиливалось', 2),
  pluralPast: Word('усиливались', 2),
  imperativeInformal: Word('усиливайся', 2),
  imperativeFormal: Word('усиливайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(усиливаться.name.text, усиливаться);

export { усиливаться };