import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изгибаться: PerfectVerb = {
  name: Word('изгибаться', 5),
  singular1stPerson: Word('изгибаюсь', 5),
  singular2ndPerson: Word('изгибаешься', 5),
  singular3rdPerson: Word('изгибается', 5),
  plural1stPerson: Word('изгибаемся', 5),
  plural2ndPerson: Word('изгибаетесь', 5),
  plural3rdPerson: Word('изгибаются', 5),
  masculinePast: Word('изгибался', 5),
  femininePast: Word('изгибалась', 5),
  neuterPast: Word('изгибалось', 5),
  pluralPast: Word('изгибались', 5),
  imperativeInformal: Word('изгибайся', 5),
  imperativeFormal: Word('изгибайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(изгибаться.name.text, изгибаться);

export { изгибаться };