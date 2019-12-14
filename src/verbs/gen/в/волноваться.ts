import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const волноваться: PerfectVerb = {
  name: Word('волноваться', 6),
  singular1stPerson: Word('волнуюсь', 4),
  singular2ndPerson: Word('волнуешься', 4),
  singular3rdPerson: Word('волнуется', 4),
  plural1stPerson: Word('волнуемся', 4),
  plural2ndPerson: Word('волнуетесь', 4),
  plural3rdPerson: Word('волнуются', 4),
  masculinePast: Word('волновался', 6),
  femininePast: Word('волновалась', 6),
  neuterPast: Word('волновалось', 6),
  pluralPast: Word('волновались', 6),
  imperativeInformal: Word('волнуйся', 4),
  imperativeFormal: Word('волнуйтесь', 4),
  imperfect: ['взволноваться','заволноваться','поволноваться'],
};

perfectVerbs.set(волноваться.name.text, волноваться);

export { волноваться };