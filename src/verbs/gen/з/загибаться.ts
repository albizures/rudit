import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загибаться: PerfectVerb = {
  name: Word('загибаться', 5),
  singular1stPerson: Word('загибаюсь', 5),
  singular2ndPerson: Word('загибаешься', 5),
  singular3rdPerson: Word('загибается', 5),
  plural1stPerson: Word('загибаемся', 5),
  plural2ndPerson: Word('загибаетесь', 5),
  plural3rdPerson: Word('загибаются', 5),
  masculinePast: Word('загибался', 5),
  femininePast: Word('загибалась', 5),
  neuterPast: Word('загибалось', 5),
  pluralPast: Word('загибались', 5),
  imperativeInformal: Word('загибайся', 5),
  imperativeFormal: Word('загибайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(загибаться.name.text, загибаться);

export { загибаться };