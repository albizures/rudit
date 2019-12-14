import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ломаться: PerfectVerb = {
  name: Word('ломаться', 3),
  singular1stPerson: Word('ломаюсь', 3),
  singular2ndPerson: Word('ломаешься', 3),
  singular3rdPerson: Word('ломается', 3),
  plural1stPerson: Word('ломаемся', 3),
  plural2ndPerson: Word('ломаетесь', 3),
  plural3rdPerson: Word('ломаются', 3),
  masculinePast: Word('ломался', 3),
  femininePast: Word('ломалась', 3),
  neuterPast: Word('ломалось', 3),
  pluralPast: Word('ломались', 3),
  imperativeInformal: Word('ломайся', 3),
  imperativeFormal: Word('ломайтесь', 3),
  imperfect: ['поломаться','сломаться'],
};

perfectVerbs.set(ломаться.name.text, ломаться);

export { ломаться };